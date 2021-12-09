import {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';

const ShippingAddressListScreen = () => {
    const navigate  = useNavigate()
    const [shippingAddresses, setShippingAddresses] =
        useState([]);
    const findAllShippingAddresses = () =>
        fetch(
            "http://localhost:1818/api/shippingAddresses")
            .then(res => res.json())
            .then(shippingAddresses => setShippingAddresses(shippingAddresses));
    useEffect(findAllShippingAddresses, []);
    return (
        <div>
            <h2>All Addrresses</h2>
            <button onClick={() => navigate("/shippingAddresses/new")}>
                Add User
            </button>
            <ul class= "list-group">
                {
                    shippingAddresses.map(shippingAddress =>
                        <li className="list-group-item"
                            key={shippingAddress.aId}>
                            <Link to={`/shippingAddresses/${shippingAddress.aId}`}>
                                Name: {shippingAddress.aId},
                                {shippingAddress.passportNumber}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )}
export default ShippingAddressListScreen;