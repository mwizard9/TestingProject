
import './App.css';
import CameraTest from './Components/CameraTest';
import Compare from './Components/Compare';
import CounterApp from './Components/CounterApp';
import TodoList from './Components/Delete';
import Crud from './Components/Edit';
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
     <TodoList/>
     <Crud/>
      
    </div>
  );
}

export default App;
