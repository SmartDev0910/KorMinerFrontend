import { Web3ReactProvider } from "@web3-react/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web3 from "web3";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import IntroVideo from "./components/IntroVideo";
import Mining from "./components/Mining";
import Roadmap from "./components/Roadmap";
import Mint from "./components/Mint";
import KorKlub from "./components/KorKlub";
import HowTo from "./components/HowTo";

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="background-gray font-orbitron p-075">
                <NavBar showBack={false} />
                <HomePage />
                <AboutUs />
                <IntroVideo />
                <Mining />
                <Roadmap />
              </div>
            }
          />
          {/* <Route
            path="/mint"
            element={
              <div className="background-gray font-orbitron p-075">
                <NavBar showBack={true} />
                <Mint />
              </div>
            }
          />
          <Route
            path="/korklub"
            element={
              <div className="background-gray font-orbitron p-075">
                <NavBar showBack={true} />
                <KorKlub />
              </div>
            }
          /> */}
          {/* <Route
            path="/howto"
            element={
              <div className="background-gray font-orbitron p-075">
                <HowTo />
              </div>
            }
          /> */}
        </Routes>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
