import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCommentAlt, faPlus, faShoppingBasket, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';



const Sidebar = () => {

    const [NavItem , setNavItem] = useContext(UserContext);
     
     
    const selectedItem = (e) => {
        if (e === "order") {
            setNavItem({
                order: true
            })
        }
         if (e === "serviceListClient") {
            setNavItem({
                serviceListClient: true
            })

        }
         if (e === "review") {
            setNavItem({
                review: true
            })

        }
         if (e === "addService") {
            setNavItem({
                addService: true
            })

        }
         if (e === "serviceListAdmin") {
            setNavItem({
                serviceListAdmin: true
            })

        }
         if (e === "makeAdmin") {
            setNavItem({
                makeAdmin: true
            })

        } 
    }
    return (
        <div className="sidebar pb-4 d-flex flex-column align-items-center col-md-2">
          <a href="/"><img className="pb-5 " src={logo} alt="" style={{ width: '9rem'}} /></a>
            
            <ul className="list-unstyled">

                <li> 
                    <Link to="/dashboard/order">
                       <span  className={NavItem.order === true ? "active" : "text-muted"} onClick={() => selectedItem("order")}><FontAwesomeIcon icon={faShoppingCart} />Order</span>
                    </Link>
                </li> 
                <li> 
                    <Link to="/dashboard/serviceList" >
                       <span className={NavItem.serviceListClient === true ? "active" : "text-muted"} onClick={() => selectedItem("serviceListClient")}><FontAwesomeIcon icon={faShoppingBasket} />ServiceList</span>
                    </Link>
                </li>
                <li> 
                    <Link to="/dashboard/review">
                       <span className={NavItem.review === true ? "active" : "text-muted"} onClick={() => selectedItem("review")}><FontAwesomeIcon icon={faCommentAlt} />Review</span>
                    </Link>
                </li> 
                <li> 
                    <Link to="/dashboard/admin/addService">
                       <span className={NavItem.addService === true ? "active" : "text-muted"} onClick={() => selectedItem("addService")}><FontAwesomeIcon icon={faShoppingBasket} />AddService</span>
                    </Link>
                </li> 
                <li> 
                    <Link to="/dashboard/admin/serviceList">
                       <span className={NavItem.serviceListAdmin === true ? "active" : "text-muted"} onClick={() => selectedItem("serviceListAdmin")}><FontAwesomeIcon icon={faPlus} />ServiceList</span>
                    </Link>
                </li> 
                 
                <li> 
                    <Link to="/dashboard/admin/makeAdmin">
                       <span className={NavItem.makeAdmin === true ? "active" : "text-muted"} onClick={() => selectedItem("makeAdmin")}><FontAwesomeIcon icon={faUserPlus} />MakeAdmin</span>
                    </Link>
                </li> 
            </ul>
            <div>
                <Link to="/" className="text-white"> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;