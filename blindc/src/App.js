import './App.css';
import Ant from './Components/Ant';
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
import Calender from './daily work/Calender';
import ImageGallery from './daily work/Count';
import Test from './daily work/Test';


function App() {
  return (
    <div className="App">
      <Test/>
      <ImageGallery/>
      {/* <Ant/>
      <Calender/>
      <CounterApp/>
      <SelectImage/>
     <ImageVoting/>
     <CameraTest/>
     <VotingCounter/>
     <TodoList/>
     <Crud/> */}
      
    </div>
  );
}

export default App;
