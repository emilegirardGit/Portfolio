import './App.css';
import './Loading.css';
import Home from './views/Home';
import Skills  from './views/Skills';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Javascript from './views/Skills/Javascript';
import Java from './views/Skills/Java';
import Csharp from './views/Skills/Csharp';
import RestAPI from './views/Skills/RestAPI';
import Android from './views/Skills/Android';
import IOS from './views/Skills/IOS';
import Projects from './views/Projects';
import FitWSarah from './views/Projects/FitWSarah';
import Databases from './views/Skills/Databases';
import PetClinic from './views/Projects/PetClinic';
import TravelJournal from './views/Projects/TravelJournal';
import GolfGame from './views/Projects/GolfGame';
import Experiences from './views/Experiences';
import Education from './views/Education';
import Resume from './views/Resume';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { LanguageProvider } from './LanguageConfig/LanguageContext';

function App() {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const onParticlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "##0a0123",
        },
      },
      fpsLimit: 30,
      particles: {
        color: {value: "#ffffff",},
        links: {color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1,},
        move: {direction: "none", enable: true,
          outModes: {default: "out",},
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {enable: true, area: 800,},
          value: 40,
        },
        opacity: {value: 0.5,},
        shape: {type: "circle",},
        size: {value: { min: 1, max: 5 },},
      },
      detectRetina: false,
    }),
    [],
  );


  return (
    <div className="App">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={onParticlesLoaded}
          options={options}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1
          }}
        />
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <LanguageProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/skills" element={<Skills />}/>
              <Route path="/skills/javascript" element={<Javascript />}/>
              <Route path="/skills/java" element={<Java />}/>
              <Route path="/skills/csharp" element={<Csharp />}/>
              <Route path="/skills/restapi" element={<RestAPI />}/>
              <Route path="/skills/android" element={<Android />}/>
              <Route path="/skills/ios" element={<IOS />}/>
              <Route path="/skills/databases" element={<Databases />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/projects/fitwsarah" element={<FitWSarah />}/>
              <Route path="/projects/petclinic" element={<PetClinic />}/>
              <Route path="/projects/traveljournal" element={<TravelJournal />}/>
              <Route path="/projects/golfgame" element={<GolfGame />}/>
              <Route path="/experiences" element={<Experiences />}/>
              <Route path="/education" element={<Education />}/>
              <Route path="/resume" element={<Resume />}/>
            </Routes>
          </Router>
        </LanguageProvider>
      </div>
    </div>
  );
}

export default App;
