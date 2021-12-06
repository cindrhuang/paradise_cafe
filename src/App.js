import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Homepage } from "./components/Pages/DessertsHomePage";
import { DessertsDetailsPage } from "./components/Pages/DessertsDetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/dessert/:id">
            <DessertsDetailsPage/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
