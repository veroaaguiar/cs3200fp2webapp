import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const PassportListScreen = () => {
    const [passports, setPassports] =
        useState([]);
    const findAllPassports = () =>
        fetch(
            "http://localhost:1818/api/passports")
            .then(res => res.json())
            .then(passports => setPassports(passports));
    useEffect(findAllPassports, []);
    return(
        <ul>
            {
                passports.map(passport =>
                    <li key={passport.passportNumber}>
                        <Link to={`/passports/${passport.passportNumber}`}>
                            {passport.passportNumber}
                        </Link>
                    </li>
                )
            }
        </ul>
    )}
export default PassportListScreen;
