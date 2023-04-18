import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddUser() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const { firstName, lastName, email, password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/users", user);
        navigate("/admin/user/homeuser");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add User Form</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="FirstName" className="form-label"> First Name </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your First Name"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="LastName" className="form-label"> Last Name </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label"> Email </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your Email Address"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label"> Password </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your Password"
                                name="password"
                                value={password}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary"> Add </button>
                        <Link className="btn btn-outline-danger mx-2" to="/admin/user/homeuser"> Cancel </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddUser;