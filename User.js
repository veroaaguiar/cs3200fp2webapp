import React from "react";
import { useParams } from 'react-router-dom';
const { useState, useEffect } = React;

const User = ({user, deleteUser, updateUser}) => {
    const [userCopy, setUserCopy] = useState(null)
    const [editing, setEditing] = useState(false)
    const { passportNumber } = useParams();
    const findUser = () =>
        fetch(
            `http://localhost:1818/api/users/${passportNumber}`)
            .then(res => res.json())
            .then(user => setUserCopy(user));
    useEffect(findUser, []);
    return(
        <div>
            {
                editing &&
                <div>
                    <input value={userCopy.firstName} onChange={(e)=>setUserCopy(userCopy => ({...userCopy, firstName: e.target.value}))}/>
                    <input value={userCopy.lastName} onChange={(e)=>setUserCopy(userCopy => ({...userCopy, lastName: e.target.value}))}/>
                    <button onClick={() => deleteUser(user.passportNumber)}>Delete</button>
                    <button onClick={() => {
                        setEditing(false)
                        updateUser(userCopy.passportNumber, userCopy)
                    }}>Save</button>
                </div>
            }
            {
                (!editing && user) &&
                <div>
                    {userCopy.firstName}
                    {userCopy.lastName}
                    <button onClick={() => setEditing(true)}>Edit</button>
                </div>
            }
        </div>
    )
}

export default User;