import {useEffect, useState} from "react";

const ShippingAddressListScreen = () => {
    const [shippingAddresses, setShippingAddresses] =
        useState([]);
    const findAllShippingAddresses = () =>
        fetch(
            "http://localhost:1818/api/shippingAddresses")
            .then(res => res.json())
            .then(shippingAddresses => setShippingAddresses(shippingAddresses));
    useEffect(findAllShippingAddresses, []);
    return(
        <ul>
            {
                shippingAddresses.map(shippingAddress =>
                    <li>{shippingAddress.shippingAddress}</li>)
            }
        </ul>
    )}
export default ShippingAddressListScreen;