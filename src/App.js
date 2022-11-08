import logo from './logo.svg';
import './App.css';

import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Prueba el modal.
        </p>
        <button>Mostrar modal</button>
        <Modal></Modal>
      </header>
      
    </div>
  );
}

export default App;
