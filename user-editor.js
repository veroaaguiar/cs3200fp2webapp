import userService from "./user-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const UserFormEditor = () => {
    const {id} = useParams()
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
            .then(() => history.back())
    const createUser = (user) =>
        userService.createUser(user)
            .then(() => history.back())
    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => history.goBack())
    return (
        <div>
            <h2>User Editor</h2>
            <label>Passport Number</label>
            <input value={user.passportNumber}/><br/>
            <label>Passport Number</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, passportNumber: e.target.value}))}
                value={user.passportNumber}/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, lastName: e.target.value}))}
                value={user.lastName}/>
            <label>First Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, firstName: e.target.value}))}
                value={user.firstName}/>
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
            <label> Verified? </label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, verified: e.target.value}))}
                value={user.verified}/>
            <br/>
            <button onClick={() => {
                history.back()}}>
                Cancel
            </button>
            <button  onClick={() => deleteUser(user.id)}>
                Delete
            </button>
            <button  onClick={() => updateUser(user.id, user)}>
                Save
            </button>
            <button
                onClick={() => createUser(user)}>
                Create
            </button>
        </div>
    )
}

export default UserFormEditor