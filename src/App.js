//Packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

//Pages
import Home from './WebPages/Home';
import Commands from './WebPages/Commands';
import Four04 from './WebPages/Four04';
import Redirect from './Components/Redirect';
import TOS from './WebPages/TOS';
import PrivacyP from './WebPages/PrivacyP';

//Componets
import NavBar from "./Components/NavBar";
import InviteBanner from './Components/InviteBanner';
import Footer from './Components/Footer';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <div className='content'>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/commands" element={<Commands />}/>
            <Route path="/privacy-policy" element={<PrivacyP />} />
            <Route path="/terms-of-service" element={<TOS />} />
            <Route path="/discord" element={<Redirect link="https://discord.gg/SqS7zQgAdP" />} />
            <Route path="/invite" element={<Redirect link="https://discordapp.com/oauth2/authorize?client_id=1172299060586225694&scope=bot%20applications.commands&permissions=268822624" />} />
            <Route path="*" element={<Four04 />} status={404}/>
          </Routes>
          <InviteBanner />
          <Footer />
          </div>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
