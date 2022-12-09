import logo from "./logo.svg";
import "./App.css";
import Topnav from "./components/Topnav.js";
import "./root.css";
import FetchGames from "./components/FetchGames";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Topnav />

      <header className="App-header">
        <h1>(free) Game Tracker</h1>
      </header>
      <FetchGames />
      <Footer />
    </div>
  );
}

export default App;
