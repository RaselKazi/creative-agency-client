import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import Order from './Component/Dashboard/Order/Order';
import OrderList from './Component/Dashboard/OrderList/OrderList';
import Review from './Component/Dashboard/Review/Review';
import AddService from './Component/Dashboard/AddService/AddService';
import ServiceList from './Component/Dashboard/ServiceList/ServiceList';
import MakeAdmin from './Component/Dashboard/MakeAdmin/MakeAdmin';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [NavItem, setNavItem] = useState({
    order: false,
    serviceListClient: false,
    review: false,
    addService: false,
    serviceListAdmin: false,
    makeAdmin: false
})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser , NavItem, setNavItem]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/order" >
              <Order></Order>
            </PrivateRoute>
          <PrivateRoute path="/dashboard/serviceList" >
              <OrderList></OrderList>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/review" >
              <Review></Review>
            </PrivateRoute>
            <Route path="/dashboard/admin/addService" >
              <AddService></AddService>
            </Route>
            <Route path="/dashboard/admin/serviceList" >
              <ServiceList></ServiceList>
            </Route>
            <Route path="/dashboard/admin/makeAdmin" >
              <MakeAdmin></MakeAdmin>
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
