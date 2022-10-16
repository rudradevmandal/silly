import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/sections/Home';
import Lessons from './components/Lessons';
import History from './components/chapters/1History/History';
import Intro from './components/chapters/2Intro/Intro';
import IndVnH from './components/chapters/3IndVnH/IndVnH';
import FormOrbit from './components/chapters/4FormOrbits/FormOrbit';
import CentripetalForce from './components/chapters/5CentripetalForce/CentripetalForce';
import NoCentripetalForce from './components/chapters/6NoCentripetalForce/NoCentripetalForce';
import Barycenter from './components/chapters/7Barycenter/Barycenter';
import ExpCentripetalForce from './components/chapters/8ExpCentripetalForce/ExpCentripetalForce';
import MathGravity from './components/chapters/9MathGravity/MathGravity';
import GravConst from './components/chapters/10GravConst/GravConst';
import KeplerHelp from './components/chapters/11KeplerHelp/KeplerHelp';
import ExpFreefall from './components/chapters/12ExpFreefall/ExpFreefall';
import Freefall from './components/chapters/13Freefall/Freefall';
import MassWeight from './components/chapters/14MassWeight/MassWeight';
import WeightDiffPlanets from './components/chapters/15WeightDiffPlanets/WeightDiffPlanets';
import ThrustPressure from './components/chapters/16ThrustPressure/ThrustPressure';
import PressureFluids from './components/chapters/17PressureFluids/PressureFluids';
import ExpBuoyancy from './components/chapters/18ExpBuoyancy/ExpBuoyancy';
import Buoyancy from './components/chapters/19Buoyancy/Buoyancy';
import ArchimedesPrinciple from './components/chapters/20ArchimedesPrinciple/ArchimedesPrinciple';
import ExpDensity from './components/chapters/21ExpDensity/ExpDensity';
import Density from './components/chapters/22Density/Density';
import Summary from './components/chapters/23Summary/Summary';
import Questions from './components/chapters/24Questions/Questions';
import Resources from './components/Resources';
import Activities from './components/Resources/Activities/Activities';
import Examples from './components/Resources/Examples/Examples';
import InTextQnA from './components/Resources/InTextQnA/InTextQnA';
import Exercises from './components/Resources/Exercises/Exercises';
import Exemplar from './components/Resources/Exemplar/Exemplar';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/lessons" element={<Lessons />} />
      <Route exact path="/lessons/history" element={<History />} />
      <Route exact path="/lessons/intro" element={<Intro />} />
      <Route exact path="/lessons/indvnh" element={<IndVnH />} />
      <Route exact path="/lessons/formorbit" element={<FormOrbit />} />
      <Route exact path="/lessons/centripetalforce" element={<CentripetalForce />} />
      <Route exact path="/lessons/nocentripetalforce" element={<NoCentripetalForce />} />
      <Route exact path="/lessons/barycenter" element={<Barycenter />} />
      <Route exact path="/lessons/expcentripetalforce" element={<ExpCentripetalForce />} />
      <Route exact path="/lessons/mathgravity" element={<MathGravity />} />
      <Route exact path="/lessons/gravconst" element={<GravConst />} />
      <Route exact path="/lessons/keplerhelp" element={<KeplerHelp />} />
      <Route exact path="/lessons/expfreefall" element={<ExpFreefall />} />
      <Route exact path="/lessons/freefall" element={<Freefall />} />
      <Route exact path="/lessons/massweight" element={<MassWeight />} />
      <Route exact path="/lessons/weightdiffplanets" element={<WeightDiffPlanets />} />
      <Route exact path="/lessons/thrustpressure" element={<ThrustPressure />} />
      <Route exact path="/lessons/pressurefluids" element={<PressureFluids />} />
      <Route exact path="/lessons/expbuoyancy" element={<ExpBuoyancy />} />
      <Route exact path="/lessons/buoyancy" element={<Buoyancy />} />
      <Route exact path="/lessons/archimedesprinciple" element={<ArchimedesPrinciple />} />
      <Route exact path="/lessons/expdensity" element={<ExpDensity />} />
      <Route exact path="/lessons/density" element={<Density />} />
      <Route exact path="/lessons/summary" element={<Summary />} />
      <Route exact path="/lessons/questions" element={<Questions />} />
      <Route exact path="/resources" element={<Resources />} />
      <Route exact path="/resources/activities" element={<Activities />} />
      <Route exact path="/resources/examples" element={<Examples />} />
      <Route exact path="/resources/intextqna" element={<InTextQnA />} />
      <Route exact path="/resources/exercises" element={<Exercises />} />
      <Route exact path="/resources/exemplar" element={<Exemplar />} />
    </Routes>
  );
}

export default App;
