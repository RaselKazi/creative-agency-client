import React from 'react';
import { faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";

const Order = () => {

    const { register, handleSubmit, errors } = useForm();


    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
    
        })
            .then(res => res.json())
            .then(success => {

                if (success) {
                    alert('Email Added Successfully!!')
                }
            })
    }
    return (
        <form className="customFormStyle" onSubmit={handleSubmit(onSubmit)}>             
        <div className="bg-white m-5 p-5 form-body">
            <div className="form-group">
                <div class="form-row">
                    <div class="col-md-6">
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="title" className="form-control form-control-lg" placeholder="Enter title" />
                        {errors.title && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="title" className="form-control form-control-lg" placeholder="Enter title" />
                        {errors.title && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="title" className="form-control form-control-lg" placeholder="Enter title" />
                        {errors.title && <span className="text-danger">This field is required</span>}
                    </div>
                    
                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} name="description" className="form-control" cols="30" rows="" placeholder="Enter Description"></textarea>
                        {errors.description && <span className="text-danger">This field is required</span>}
                    </div>
                    </div>

                    <div className="row">
                    <div class="col-md-6">
                    <div className="form-group">
                        <label htmlFor="">Service Title</label>
                        <input type="text" ref={register({ required: true })} name="title" className="form-control form-control-lg" placeholder="Enter title" />
                        {errors.title && <span className="text-danger">This field is required</span>}
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