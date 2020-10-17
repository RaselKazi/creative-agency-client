import React from 'react';
import './MakeAdmin.css';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {

    const { register, handleSubmit, errors } = useForm();

    
    const onSubmit = data => {
        fetch('https://thawing-peak-06922.herokuapp.com/addAdminEmail', {
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
        <div className="form-group bg-white m-5 p-5 form-body" >
            <label>Email</label>
            <form class="form-inline" onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group">
                    <input type="email" ref={register({ required: true })} name="email" class="form-control" id="" placeholder="" />
                </div>
                <button type="submit" class="btn btn-success ml-4">Submit</button>
            </form>
            <p>{errors.email && <span className="text-danger">This field is required</span>}</p>
        </div>
    );
};

export default MakeAdmin;