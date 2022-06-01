import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import { Todos } from './components/Todos';

function App() {
  return (
    <div className="App">
      <Counter intialvalues={1000} />
      <Todos />

    </div>
  );
}

export default App;
