import React from "react"
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Register from "./component/register"
import Login from "./component/login";
import CustomerLogin from "./component/customerlogin";
import Customer from "./component/customer";
import './App.css';
import Header from "./component/Header";
import Driverregister from "./component/Driverregister";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Booking from "./component/booking";
import Services from "./component/Services";
import Contact from "./component/Contact"
import Test from "./test";
import About from "./component/About";
import Admindetail from "./component/Admindetail";
import Admindriverdetail from "./component/Admindriverdetail";
import Adminbookingdetail from "./component/Adminbookingdetail";
// import AdminHeader from "./component/AdminHeader";
import 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

        {/* <Route path ="/adminheader">
          <AdminHeader/>
          </Route> */}

          <Route path ="/register">
            <Header/>
            <Register/>
            <Footer/>
          </Route>
          
          <Route path ="/adminlogin">
            <Login/>
            
            <Footer/>
          </Route>

          <Route path ="/admindetail">
            <Admindetail/>
            <Footer/>
          </Route>

          <Route path ="/admindriverdetail">
            <Admindriverdetail/>
            <Footer/>
          </Route>

          <Route path ="/adminbookingdetail">
            <Adminbookingdetail/>
            <Footer/>
          </Route>

          <Route path ="/Driverregister">
          <Header/>
            <Driverregister/>
            {/* <Footer/> */}
          </Route>

          <Route path ="/customerlogin">
            <Header/>
            <CustomerLogin/>
            <Footer/>
          </Route>

          <Route path ="/customer">
          <Header/>
            <Customer/>
            <Footer/>
          </Route>
          <Route path= "/contact">
            <Header/>
            <Contact/>
            <Footer/>
          </Route>
          <Route path ="/service">
          <Header/>
          <Services/>
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
