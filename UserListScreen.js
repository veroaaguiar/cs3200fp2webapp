import {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';

const UserListScreen = () => {
    const navigate = useNavigate();
    const [users, setUsers] =
        useState([]);
    const findAllUsers = () =>
        fetch(
            "http://localhost:1818/api/users")
            .then(res => res.json())
            .then(users => setUsers(users));
    useEffect(findAllUsers, []);
    return (
        <div>
            <h2>All Users</h2>
            <button onClick={() => navigate("/users/new")}>
                Add User
            </button>
            <ul class= "list-group">
                {
                    users.map(user =>
                        <li className="list-group-item"
                            key={user.passportNumber}>
                            <Link to={`/users/${user.passportNumber}`}>
                               Name: {user.lastName},
                                 {user.firstName}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}
    export default UserListScreen;

