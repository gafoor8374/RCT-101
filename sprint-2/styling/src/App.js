import logo from './logo.svg';
import {Appstyled,AppHeader,AppLogo,flexbox} from "./App.styled"


function App() {
  return (
    <Appstyled>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <flexbox flexDirection="column">
         <div>A</div>
         <div>B</div>
       </flexbox>
      </AppHeader>
    </Appstyled>
  );
}

export default App;
