import "./App.css";
import Home from "./pages/Home";
import { withRouter, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";


function App() {
  return (
    <Router>
       <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
       </div>
    </Router>
  );
}

export default App;
