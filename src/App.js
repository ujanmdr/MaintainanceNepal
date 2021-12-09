import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Resource from "./Pages/Resource";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Dashboard from "./Authentication/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/resource" component={Resource} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
