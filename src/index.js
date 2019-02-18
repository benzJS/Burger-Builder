import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";
import BurgerBuilder from "./pages/BurgerBuilder";
import BurgerProvider from "./contexts/BurgerContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <BurgerProvider>
          <Navbar />
          <Route path="/" exact component={BurgerBuilder} />
        </BurgerProvider>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
