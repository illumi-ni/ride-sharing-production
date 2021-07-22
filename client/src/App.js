import React from "react"
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Register from "./register"
import Login from "./login";
import CustomerLogin from "./customerlogin";
import Customer from "./customer";
import './App.css';
import Header from "./Header";
import Driverregister from "./Driverregister";
import Home from "./Home";
import Footer from "./Footer";
import Booking from "./booking";
import Contact from "./Contact"
import Test from "./test";
import About from "./About";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path ="/register">
            <Register/>
            <Footer/>
          </Route>
          
          <Route path ="/adminlogin">
            <Login/>
            <Footer/>
          </Route>

          <Route path ="/Driverregister">
          <Header/>
            <Driverregister/>
            <Footer/>
          </Route>

          <Route path ="/customerlogin">
            <CustomerLogin/>
            <Footer/>
          </Route>

          <Route path ="/customer">
            <Customer/>
            <Footer/>
          </Route>
          <Route path= "/contact">
            <Header/>
            <Contact/>
            <Footer/>
          </Route>

          <Route path ="/booking">
          <Header/>
          <Booking/>
          <Footer/>
          </Route>

          <Route path ="/About">
          <Header/>
          <About/>
          <Footer/>
          </Route>
          
          <Route path ="/">
          <Header/>
          <Home/>
          <Footer/>
          </Route>

          <Route path ="/test">
          <Test/>
          </Route>
          
        
      </Switch>
      </div>
    </Router>
   
  )
}

export default App;
