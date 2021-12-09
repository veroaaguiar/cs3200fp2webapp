import shippingAddressService from "./shippingAddress-service"
import React from "react";
import {useParams, useNavigate, Link} from 'react-router-dom';
const {useState, useEffect} = React;

const ShippingAddressFormEditor = () => {
    const {aId} = useParams()
    const navigate = useNavigate()
    const [shippingAddress, setShippingAddress] = useState({})
    useEffect(() => {
        if(aId !== "new") {
            findShippingAddressById(aId)
        }
    }, []);
    const findShippingAddressById = (aId) =>
        shippingAddressService.findShippingAddressById(aId)
            .then(shippingAddress => setShippingAddress(shippingAddress))

    const deleteShippingAddress = (aId) =>
        shippingAddressService.deleteShippingAddress(aId)
            .then(() => navigate.back())
    const createShippingAddress = (shippingAddress) =>
        shippingAddressService.createShippingAddress(shippingAddress)
            .then(() => navigate.back())
    const updateShippingAddress = (aId, newShippingAddress) =>
        shippingAddressService.updateShippingAddress(aId, newShippingAddress)
            .then(() => navigate.goBack())
    return (
        <div>
            <h2>Shipping Address Editor</h2>
            <label>A Id</label>
            <input value={shippingAddress.pId}/><br/>
            <label>A Id</label>
            <input
                onChange={(e) =>
                    setShippingAddress(shippingAddress =>
                        ({...shippingAddress, aId: e.target.value}))}
                value={shippingAddress.aId}/>
            <label>Passport Number</label>
            <input
                onChange={(e) =>
                    setShippingAddress(ShippingAddress =>
                        ({...shippingAddress, passportNumber: e.target.value}))}
                value={shippingAddress.passportNumber}/>
            <br/>
            <button onClick={() => {
                navigate.back()}}>
                Cancel
            </button>
            <button  onClick={() => deleteShippingAddress(shippingAddress.aId)}>
                Delete
            </button>
            <button  onClick={() => updateShippingAddress(shippingAddress.aId, shippingAddress)}>
                Save
            </button>
            <button
                onClick={() => createShippingAddress(shippingAddress)}>
                Create
            </button>
        </div>
    )
}

export default ShippingAddressFormEditor