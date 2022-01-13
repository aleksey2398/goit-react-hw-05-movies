import { BrowserRouter as Router } from "react-router-dom";

import Header from "../src/Client/Header/Header";
import Routes from "./Routes";
//import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;