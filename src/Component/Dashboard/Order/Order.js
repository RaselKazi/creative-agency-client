import React, { useContext } from 'react';
import { faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const Order = () => {

    const [loggedInUser, setLoggedInUser, serviceData, setServiceData] = useContext(UserContext);

    const handleSubmit = (e) => {

        const orderInfo = {
            name: e.target.name.value,
            email: e.target.email.value,
            serviceName: serviceData.title,
            serviceDetail: serviceData.description,
            projectDetail: e.target.projectDetail.value,
            serviceIcon: serviceData.icon.img
        }

        console.log(orderInfo)
        fetch('https://thawing-peak-06922.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('order successfully added')
            }
        })
        e.preventDefault()
    }

    return (
        <form className="customFormStyle" onSubmit={handleSubmit}>             
        <div className="bg-white m-5 p-5 form-body">
            <div className="form-group">
                <div class="form-row">
                    <div class="col-md-6">
                    <div className="form-group">
                        <input type="text"  name="name" className="form-control form-control-lg" defaultValue={loggedInUser.name} placeholder="Your Name / Company's Name" />
                      
                    </div>
                    <div className="form-group">
                        <input type="email"  name="email" className="form-control form-control-lg"defaultValue={loggedInUser.email}  placeholder="Enter your email" />
                        
                    </div>
                    <div className="form-group">
                        <input type="text"  name="category" defaultValue={serviceData.title} className="form-control form-control-lg" placeholder="Category Graphics, Web or Else" />
                        
                    </div>
                    
                    <div className="form-group">
                        <textarea type="textarea"  name="description" className="form-control" cols="30" rows="3" placeholder="Project Details"></textarea>
                       
                    </div>
                    </div>

                    <div className="row">
                    <div class="col-md-6">
                    <div className="form-group">
                        <label htmlFor="">Price</label>
                        <input type="text"  name="Price" className="form-control form-control-lg" placeholder="Price" pattern="[0-9]+"/>
                       
                    </div>
                    </div>
                    <div class="col-md-6">
                        <label htmlFor="">Icon</label> <br />
                            <label htmlFor="actual-btn" className="btn btn-outline-success file-btn">
                                    <span className="responsive-file px-2"><FontAwesomeIcon className=" mx-3" icon={faCloudUploadAlt} />Upload </span>
                            </label>
                        <input type="file" class="input-file"/>
                    </div>
                    </div>
                </div>
            </div>     
            <div className="row">  
                <div className="col-md-6">
                  <button type="submit" class="btn btn-dark mr-auto px-5" >Send</button>
                </div>
            </div>
        </div>
    </form>
    );
};

export default Order;