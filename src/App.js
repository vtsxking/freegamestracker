import logo from "./logo.svg";
import "./App.css";
import Topnav from "./components/Topnav.js";
import "./root.css";
import FetchGames from "./components/FetchGames";

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
      <FetchGames/>
    </div>
  );
}

export default App;
