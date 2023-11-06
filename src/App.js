import logo from './logo.svg';
import './App.css';

function App() {

  function numberAdder(num1, num2) {
    return num1 + num2;

    // return 6;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Aninote</h1>
        <p>Tell us your favotite Anime!</p>
        <p>{`My favorite number is ${numberAdder(10, 24)}`}</p>
      </header>
    </div>
  );
}

export default App;
