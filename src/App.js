import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Resource from "./Pages/Resource";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Dashboard from "./Authentication/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Myprofile from "./Components/Userdashboard/Myprofile";
import Addprofile from "./Components/Userdashboard/Addprofile";
const App = () => {
  const Error = () => {
    return (
      <>
        <Navbar />
        <h1>
          {" "}
          <center>Oops!! Page Not Found</center>
        </h1>
        ;
      </>
    );
  };
  return (
    <>
      <Router>
        <Switch>
          <Router>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>

              <Route path="/dashboard">
                <Dashboard />
              </Route>

              <Route path="/resource">
                <Resource />
              </Route>

              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/myprofile">
                <Myprofile />
              </Route>
              <Route path="/addprofile">
                <Addprofile />
              </Route>

              <Route path="">
                <Error />
              </Route>
            </Switch>
          </Router>
        </Switch>
      </Router>
    </>
  );
};

export default App;
