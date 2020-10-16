import React from 'react';
import './ServiceList.css'
const ServiceList = () => {
    return (
            <table className="list-table table">
                <thead className="table-header">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Project Details</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr key="">
                        <td>hfjh</td>
                        <td>fdgdf</td>
                        <td>fdfdf</td>
                        <td>fdhf</td>
                        <td>
                            <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Action
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item text-success" href="#">Done</a>
                                <a class="dropdown-item text-danger" href="#">Pending</a>
                                <a class="dropdown-item text-warning" href="#">On Going</a>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr key="">
                        <td>hfjh</td>
                        <td>fdgdf</td>
                        <td>fdfdf</td>
                        <td>fdhf</td>
                        <td>
                            <div class="form-group">
                                <select class="form-control">
                                <option class="text-success">Done</option>
                                <option class="text-danger">Pending</option>
                                <option class="text-warning">On Going</option>
                                </select>
                            </div>
                         </td>
                    </tr>
                </tbody>
            </table>
    );
};

export default ServiceList;