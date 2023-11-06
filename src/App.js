import './App.css';
import './Navbar.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/aninoteslogo.png'} alt="Custom Image Description" />
      </header>
    </div>
  );
}

export default App;