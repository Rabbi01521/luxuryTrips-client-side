import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AboutUs from "./Pages/Aboutus/AboutUs";
import AddTrips from "./Pages/AddTrips/AddTrips";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Home/Login/Login/Login";
import PrivateRoute from "./Pages/Home/Login/PrivateRoute/PrivateRoute";
import SignUp from "./Pages/Home/Login/SignUp/SignUp";
import Hotel from "./Pages/Hotel/Hotel";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import MyOrders from "./Pages/MyOrders/MyOrders";
import NotFound from "./Pages/NotFound/NotFound";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/signin">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/aboutUs">
              <Header />
              <AboutUs></AboutUs>
              <Footer></Footer>
            </Route>
            <Route path="/hotel">
              <Header />
              <Hotel />
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/trip/:tripId">
              <Header />
              <PlaceOrder></PlaceOrder>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <Header />
              <MyOrders />
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <Header />
              <ManageOrders />
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/addPlace">
              <Header />
              <AddTrips />
              <Footer></Footer>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
