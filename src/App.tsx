import logo from './find_bug.svg';
import error from './error.svg'
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
        <div className="error-container">
          <img src={error} className="error-logo" />
          <span>Error</span>
        </div>
      </header>
    </div>
  );
}

export default App;
