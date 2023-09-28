import logo from './logo.svg';
import './App.css';
import MainContent from './main-content/MainContent';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <MainContent />
      <div className='App-footer'>
        <span className='copyright'>&copy; {(new Date().getFullYear())}</span>
      </div>
    </div>
  );
}

export default App;
