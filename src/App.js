import logo from "./logo.svg";
import "./App.css";
import Topnav from "./Topnav";
import "./root.css";

function App() {
  return (
    <div className="App">
      <Topnav />

      <header className="App-header">
        <p>react</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
