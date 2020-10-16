import { faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './AddService.css'

const AddService = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile)
    };

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', e.target.title.value);
        formData.append('description', e.target.description.value);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('service successfully added')
            }
        })
        e.preventDefault()
    }

    return (
        <div className="py-5 w-50 px-4 dashboard">
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" className="form-control py-4"  placeholder="Enter title" required/>
                <br/>
                <textarea type="text" style={{height:'100px'}} name="description" className="form-control pt-3" placeholder="Enter description" required/>
                <br/>
                <label for="files" className="btn btn-outline-success"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                <input type="file" onChange={handleFileChange} name="picture" style={{display:'none'}} id="files" className="form-control py-4" required/>
                <br/>
                <button type="submit" className="btn btn-success px-5 mt-4">Submit</button>
            </form>
        </div>
    );
};

export default AddService;