
import './App.css';
import CameraTest from './Components/CameraTest';
import Compare from './Components/Compare';
import Elo from './Components/Elo';
import ImageVoting from './Components/ImageVoting';

import RandomImage from './Components/RandomImage';
import VotingCounter from './Components/VotingCounter';


function App() {
  return (
    <div className="App">
     <ImageVoting/>
     <CameraTest/>
     <VotingCounter/>
      
    </div>
  );
}

export default App;
