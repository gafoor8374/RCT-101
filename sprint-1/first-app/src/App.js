import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello';
import { Answer } from './components/Answer';


function App() {
  return (
    <div className="App">
      
      <Hello />
      <Answer name="Gafoor" place="Kurnool"/>
    </div>
  );
}

export default App;
