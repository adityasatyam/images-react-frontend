import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import NewImage from './Components/NewImage';
function App() {
  return (
    <Router>
      <Switch>
         <Route exact path="/">
            <Home />
          </Route>
          <Route path="/new">
            <NewImage />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
