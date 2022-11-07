import "./App.css";
import Home from "./pages/Home";
import { withRouter, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <Router>
       <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <h1>This is searchpage</h1>
          </Route>
          <Route>
            <About />
          </Route>
        </Switch>
       </div>
    </Router>
  );
}

export default App;
