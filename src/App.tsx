import logo from './find_bug.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Sample project for git-bisect tutorial
        </p>
        <a
          className="App-link"
          href="https://isamatov.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          More tutorials
        </a>
      </header>
    </div>
  );
}

export default App;
