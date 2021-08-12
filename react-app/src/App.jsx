import logo from './logo.png';
import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <img src={logo} className="sd-logo" alt="ScaleDynamics" />
      <Hello />
    </div>
  );
}

export default App;
