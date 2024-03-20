import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import Compteur from './components/CompteurComponent';
import InputControlled from './components/InputControlledComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><img src={logo} className="App-logo" alt="logo" /></div>
        <ParentComponent/>
       <InputControlled/>
        <Compteur/>

      </header>
    </div>
  );
}

export default App;
