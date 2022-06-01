// import logo from './logo.svg';
import './App.css';
import { Button } from "@chakra-ui/react";
import { InitialFocus } from './components/Modal';
import { DrawerExample } from './components/Drawer';

function App() {
  return (
    <div className="App">
      <Button colorScheme="blue">Button</Button>
      <InitialFocus />
      <DrawerExample />
    </div>
  );
}

export default App;
