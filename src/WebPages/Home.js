import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return ( 
        <div className="HomeContent">
            <Helmet>
                <title>PogoGPT | Artificial intelligence</title>
                <meta property="og:title" content="PogoGPT | Artificial intelligence" />
                <meta name="description" content="Descubre PogoGPT, un asistente IA de Discord desarrollado por Pogo OS Studio. Potencia tus servidores con inteligencia artificial. ¡Invitalo ya!" />
                <meta property="og:description" content="Descubre PogoGPT, un asistente IA de Discord desarrollado por Pogo OS Studio. Potencia tus servidores con inteligencia artificial. ¡Invitalo ya!" />
                <meta property="og:url" content="ai.pogoos.com" />
            </Helmet>
            <div className="LayoutContainer">
                <div className="InfoBubble">
                    <div className="InfoColLeft">
                        <div className="InfoContent">
                                <div className="AltBoldText">POGOGPT</div>
                                <div className="MainText">Asistente IA</div>
                                <div className="AltText">Soy PogoGPT, tu asistente IA en Discord. ¡Hablemos de lo que quieras! 😊.</div>
                                <div className="infoButtonContainer">
                                    <Link to="/invite" className='GenericLinkDeco'>
                                        <div className="infoButton" id="InfoMainButton">
                                            Invitame
                                        </div>
                                    </Link>
                                    <Link to="/commands" className='GenericLinkDeco'>
                                        <div className="infoButton" id="InfoAltButton">
                                            /help
                                        </div>
                                    </Link>
                                </div>
                        </div>
                    </div>
                    <div className="InfoColRight">
                        <div className="InfoImg">
                            <img rel="prefetch" src="./img/Logos/pogogpt.png" alt="MeiiLogo" width="150px" height="150px"/>
                        </div>
                    </div>
                </div>
                <div className='InfoDividerHR'><hr /></div>
                <div className='FeatureTitleContainer'>
                    <div className='FeatureTitleText'>Funciones:</div>
                </div>
                <div className='FeatureBubbleContainer'>
                    <div className="FeatureBubble" id='first'>
                        <div className="FeatureColLeft">
                            <div className='FTextContainer'>
                                <div className='FTitle' id='LongBoi'>Genera Imagenes</div>
                                <div className='FSubTitle'>Genera imágenes de forma creativa y original.</div>
                            </div>
                        </div>
                        <div className="FeatureColRight">
                            <div className='FPic'>
                                <img rel="prefetch" src="./img/FeatureScreenshots/GIscreenshot.jpg" alt="PogoGPT Imagine Screenshot" width="270px" height="130px"/>  
                            </div>
                        </div>
                    </div>
                    <div className="FeatureBubble" id='second'>
                        <div className="FeatureColLeft">
                            <div className='FPic' id='CL'>
                                <img rel="prefetch" src="./img/FeatureScreenshots/ASKscreenshot.jpg" alt="PogoGPT Ask Screenshot" width="280px" height="168px"/>  
                            </div>
                        </div>
                        <div className="FeatureColRight">
                            <div className='FTextContainer' id='CL'>
                                <div className='FTitle'>Haz Preguntas</div>
                                <div className='FSubTitle'>Haz preguntas para interactuar y mantener la atención.</div>
                            </div>
                        </div>
                    </div>
                    <div className="FeatureBubble" id='third'>
                        <div className="FeatureColLeft">
                            <div className='FTextContainer' id='GE'>
                                <div className='FTitle'>Traduce textos</div>
                                <div className='FSubTitle'>Traduce textos a diferentes idiomas de manera rápida y eficiente.</div>
                            </div>
                        </div>
                        <div className="FeatureColRight">
                            <div className='FPic' id='GE'>
                                <img rel="prefetch" src="./img/FeatureScreenshots/TTscreenshot.jpg" alt="PogoGPT Translate Screenshot" width="280px" height="210px"/>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className='EndOfPageSpacer' />
            </div>
        </div>
     );
}
 
export default Home;
