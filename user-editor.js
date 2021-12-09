import userService from "./user-service"
import { Button } from 'semantic-ui-react'
import React from "react";
import  {useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';


const UserFormEditor = () => {
    const {id} = useParams()
    console.log(id);
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findUserById(id)
        }
    }, []);
    const findUserById = (id) =>
        userService.findUserById(id)
            .then(user => setUser(user))
    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(() => navigate("/"))
    const createUser = (user) =>
        userService.createUser(user)
            .then(() => navigate("/"))
    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => navigate("/"))
    return (
        <div>
            <h2>User Editor</h2>
            <label>Passport Number</label>
            <input value={user.passportNumber}/><br/>
            <label>First Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, firstName: e.target.value}))}
                value={user.firstName}/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, lastName: e.target.value}))}
                value={user.lastName}/>
            <label> Date of Birth </label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, dateOfBirth: e.target.value}))}
                value={user.dateOfBirth}/>
            <label>Password</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, password: e.target.value}))}
                value={user.password}/>
            <br/>
            <Button onClick={() => {
                navigate("/")}}>
                Cancel
            </Button>
            {id !== "new" &&
            <Button  onClick={() =>
                deleteUser(user.id)}>
                Delete
            </Button>}
            { id !== "new" &&
            <Button  onClick={() => updateUser(id, user)}>
                Save
            </Button>}
            {id == "new" &&
            <Button
                onClick={() => createUser(user)}>
                Create
            </Button>}
            <Link to={"/shippingAddresses/:{id}"} className="user list btn">Shipping Address(es) for this User:</Link>

        </div>
    )
}

export default UserFormEditor