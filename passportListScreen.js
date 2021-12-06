import {useEffect, useState} from "react";

const PassportListScreen = () => {
    const [passports, setPassports] =
        useState([]);
    const findAllPassports = () =>
        fetch(
            "http://localhost:1818/api/users")
            .then(res => res.json())
            .then(passports => setPassports(passports));
    useEffect(findAllPassports, []);
    return(
        <ul>
            {
                passports.map(passport =>
                    <li>{passport.passport}</li>)
            }
        </ul>
    )}
export default PassportListScreen;
