
import './App.css';
import CameraTest from './Components/CameraTest';
import Compare from './Components/Compare';
import CounterApp from './Components/CounterApp';
import Elo from './Components/Elo';
import ImageVoting from './Components/ImageVoting';

import RandomImage from './Components/RandomImage';
import SelectImage from './Components/SelectImage';
import VotingCounter from './Components/VotingCounter';


function App() {
  return (
    <div className="App">
      <CounterApp/>
      <SelectImage/>
     <ImageVoting/>
     <CameraTest/>
     <VotingCounter/>
      
    </div>
  );
}

export default App;
