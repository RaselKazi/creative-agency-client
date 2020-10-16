import React, { useEffect, useState, useContext} from 'react';
import { UserContext } from '../../../App';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Order from '../Order/Order';
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {

    const [NavItem , loggedInUser] = useContext  (UserContext);

            const userName = sessionStorage.getItem("name");
            const userPic = sessionStorage.getItem("photo");

    return (
        <section className="container-fluid">
            <div className="row">
                <div className="col-md-2 py-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 ">
                    <div className="dashbord-hader">
                        <div className="row justify-content-between">
                            <div className="offset-md-1 col-md-3">
                            <h2 className="py-3 d-flex">
                                {NavItem.order? "Order" : ""}
                                {NavItem.serviceListClient? "Service List" : ""}
                                {NavItem.review? "Review" : ""}
                                {NavItem.addService? "Add Service" : ""}
                                {NavItem.serviceListAdmin? "Order List" : ""}
                                {NavItem.makeAdmin? "Make Admin" : ""}
                            </h2>
                            </div>
                            <div className="col-md-3 py-3 d-flex user-icon">
                                <img src={userPic} alt=""/>
                                <h5 className="text-muted">{userName}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="dashbord-body">  
                        <div className="container form-body">
                            {NavItem.order && <Order></Order>}
                            {NavItem.serviceListClient  && <OrderList></OrderList>}
                            {NavItem.review && <Review></Review>}
                            {NavItem.addService && <AddService></AddService>}
                            {NavItem.serviceListAdmin && <ServiceList></ServiceList>}
                            {NavItem.makeAdmin && <MakeAdmin></MakeAdmin>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;