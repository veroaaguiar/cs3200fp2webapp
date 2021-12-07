const USERS_URL = "http://localhost:1818/api/users"

export const findAllUsers = () =>
    fetch(USERS_URL)
        .then(response => response.json())

export const findUserById = (passportNumber) =>
    fetch(`${USERS_URL}/${passportNumber}`)
        .then(response => response.json())


export const deleteUser = (passportNumber) =>
    fetch(`${USERS_URL}/${passportNumber}`, {
        method: "DELETE"
    })


export const createUser = (passportNumber) =>
    fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(passportNumber),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateUser = (passportNumber, user) =>
    fetch(`${USERS_URL}/${passportNumber}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllUsers,
    findUserById,
    deleteUser,
    createUser,
    updateUser
}
