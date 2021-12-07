import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const UserListScreen = () => {
    const [users, setUsers] =
        useState([]);
    const findAllUsers = () =>
        fetch(
            "http://localhost:1818/api/users")
            .then(res => res.json())
            .then(users => setUsers(users));
    useEffect(findAllUsers, []);
    return (
        <ul>
            {
                users.map(user =>
                    <li>key={user.passportNumber}
                        <Link to={`/users/${user.passportNumber}`}>
                            {user.firstName}
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}
    export default UserListScreen;

