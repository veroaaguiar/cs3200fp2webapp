
import './App.css';
import UserListScreen from "./UserListScreen";
import HomeScreen from "./home-screen";
import PassportListScreen from "./passportListScreen";
import ShippingAddressListScreen from "./shippingAddressListScreen";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import React, {Component} from "react";
import User from "./User";
import UserFormEditor from "./user-editor";

function App() {
    return (
            <div style={{padding: 10}}>
                <BrowserRouter>
                    <Routes>
                    {<Route path="/" element={<HomeScreen/>}/>}
                        {<Route path="/users" element={<UserListScreen/>}/>}
                        {<Route exact path="/users/:id" element={<UserFormEditor/>} />}
                    {<Route path="/passports" element={<PassportListScreen/>}/>}
                        {<Route path="/shippingAddresses" element={<ShippingAddressListScreen/>}/>}
                    {<Route path="/shippingAddresses/:passportNumber" element={<ShippingAddressListScreen/>}/>}
                </Routes>
                </BrowserRouter>
            </div>
        );
    }


export default App;

