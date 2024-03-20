import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import Compteur from './components/CompteurComponent';
import InputControlled from './components/InputControlledComponent';
import Liste from './components/ListeComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><img src={logo} className="App-logo" alt="logo" /></div>
      <ParentComponent/>
      <InputControlled/>
      <Compteur/>
      <Liste/>
      </header>
    </div>
  );
}

export default App;
