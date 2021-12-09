import {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';

const HomeScreen = () => {
    const navigate = useNavigate();
    const [users, setUsers] =
        useState([]);
    const findAllUsers = () =>
        fetch(
            "http://localhost:1818/api/users")
            .then(res => res.json())
            .then(users => setUsers(users));
    useEffect(findAllUsers, []);
    const findAllPassports = () =>
        fetch(
            "http://localhost:1818/api/passports")
            .then(res => res.json())
            .then(users => setUsers(users));
    useEffect(findAllPassports, []);
    const findAllShippingAddresses = () =>
        fetch(
            "http://localhost:1818/api/shippingAddresses")
            .then(res => res.json())
            .then(users => setUsers(users));
    useEffect(findAllShippingAddresses, []);

    return (
        <div>
            <h2>Welcome Administrator</h2>
            <ul class= "list-group">
                <Link to="/users" className="user list">Click to view all users</Link>
                <Link to="/passports" className="passport list">Click to view all passports</Link>
                <Link to="/shippingAddresses" className="user list btn">Click to view all shipping</Link>
            </ul>
        </div>
    )
}
export default HomeScreen;