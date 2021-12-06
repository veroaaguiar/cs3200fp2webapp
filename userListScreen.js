import {useEffect, useState} from "react";

const UserListScreen = () => {
    const [users, setUsers] =
        useState([]);
    const findAllUsers = () =>
        fetch(
            "http://localhost:1818/api/users")
            .then(res => res.json())
            .then(users => setUsers(users));
    useEffect(findAllUsers, []);
    return(
        <ul>
            {
                users.map(user =>
                    <li>{user.passportNumber}</li>)
            }
        </ul>
    )}
export default UserListScreen;

