import passportService from "./passport-service"
import React from "react";
const {useState, useEffect} = React;
const {useParams, useNavigate} = window.ReactRouterDOM;



const PassportFormEditor = () => {
    const {pId} = useParams()
    const {history} = useNavigate
    const [passport, setPassport] = useState({})
    useEffect(() => {
        if(pId !== "new") {
            findPassportById(pId)
        }
    }, []);
    const findPassportById = (pId) =>
        passportService.findPassportById(pId)
            .then(passport => setPassport(passport))
    const deletePassport = (pId) =>
        passportService.deletePassport(pId)
            .then(() => history.back())
    const createPassport = (passport) =>
        passportService.createPassport(passport)
            .then(() => history.back())
    const updatePassport = (pId, newPassport) =>
        passportService.updatePassport(pId, newPassport)
            .then(() => history.goBack())
    return (
        <div>
            <h2>Passport Editor</h2>
            <label>P Id</label>
            <input value={passport.pId}/><br/>
            <label>P Id</label>
            <input
                onChange={(e) =>
                    setPassport(passport =>
                        ({...passport, pId: e.target.value}))}
                value={passport.pId}/>
            <label>Passport Number</label>
            <input
                onChange={(e) =>
                    setPassport(passport =>
                        ({...passport, passportNumber: e.target.value}))}
                value={passport.passportNumber}/>
            <label>Expiration</label>
            <input
                onChange={(e) =>
                    setPassport(passport =>
                        ({...passport, expiration: e.target.value}))}
                value={passport.expiration}/>
            <br/>
            <button onClick={() => {
                history.back()}}>
                Cancel
            </button>
            <button  onClick={() => deletePassport(passport.pId)}>
                Delete
            </button>
            <button  onClick={() => updatePassport(passport.pId, passport)}>
                Save
            </button>
            <button
                onClick={() => createPassport(passport)}>
                Create
            </button>
        </div>
    )
}

export default PassportFormEditor