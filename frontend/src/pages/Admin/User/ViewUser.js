import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ViewUser() {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, );

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/user/${id}`);
        setUser(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User Details</h2>

                    <div className="card">
                        <div className="card-header"> Details of user id : {user.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <b>First Name: </b> {user.firstName} </li>
                                <li className="list-group-item"> <b>Last Name: </b> {user.lastName} </li>
                                <li className="list-group-item"> <b>Email: </b> {user.email} </li>
                                <li className="list-group-item"> <b>Password: </b> {user.password} </li>                   
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to="/admin/user/homeuser"> Back to User Management </Link>
                </div>
            </div>
        </div>
    );
}

export default ViewUser;