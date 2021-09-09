import React from "react"
import { BrowserRouter as Router, Switch, Route }
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
import AdminHeader from "./component/AdminHeader";
import Admindetail from "./component/Admindetail";
import Admindriverdetail from "./component/Admindriverdetail";
import Adminbookingdetail from "./component/Adminbookingdetail";
import Customerprofile from "./component/Customerprofile";
import UpcomingRide from "./component/Upcomingride";
import DriverUpdate from "./component/DriverUpdate";
import AdminRegister from "./component/AdminRegister";
import 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import BookingUpdate from "./component/BookingUpdate";
import History from "./component/History";
import Demo from "./component/demo";
import AdminDashboard from "./component/AdminDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register">
            <Header />
            <Register />
            <Footer />
          </Route>

          <Route path="/adminlogin">
            <Header />
            <Login />
            <Footer />
          </Route>

          <Route path="/adminregister">
            <Header />
            <AdminRegister />
            <Footer />
          </Route>

          <Route path="/AdminDashboard">
            <AdminHeader />
            <AdminDashboard />
            <Footer />
          </Route>

          <Route path="/admindashboard">
            <AdminHeader />
            <Footer />
          </Route>

          <Route path="/admindetail">
            <AdminHeader />
            <Admindetail />
            <Footer />
          </Route>

          <Route path="/admindriverdetail">
            <AdminHeader />
            <Admindriverdetail />
            <Footer />
          </Route>

          <Route path="/adminbookingdetail">
            <AdminHeader />
            <Adminbookingdetail />
            <Footer />
          </Route>

          <Route path="/customerprofile">
            <Header></Header>
            <Customerprofile />
            <Footer />
          </Route>

          <Route path="/demo">
            <Header></Header>
            <Demo />
            <Footer />
          </Route>

          <Route path="/History">
            <Header></Header>
            <History />
            <Footer />
          </Route>

          <Route path="/Upcomingride">
            <Header></Header>
            <UpcomingRide />
            <Footer />
          </Route>

          <Route path="/BookingUpdate/:id" component={BookingUpdate} />

          <Route path="/driverupdate">
            <Header></Header>
            <DriverUpdate />
            <Footer />
          </Route>

          <Route path="/Driverregister">
            <AdminHeader />
            <Driverregister />
            <Footer />
          </Route>

          <Route path="/customerlogin">
            <Header />
            <CustomerLogin />
            <Footer />
          </Route>

          <Route path="/customer">
            <Header />
            <Customer />
            <Footer />
          </Route>

          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>

          <Route path="/service">
            <Header />
            <Services />
            <Footer />
          </Route>

          <Route path="/booking">
            <Header />
            <Booking />
            <Footer />
          </Route>

          <Route path="/About">
            <Header />
            <About />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;