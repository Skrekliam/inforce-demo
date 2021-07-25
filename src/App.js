import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import InfoPage from "./components/InfoPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/:id">
            <InfoPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
