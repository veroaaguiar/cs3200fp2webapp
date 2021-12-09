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
        <ul class = "list-group">{JSON.stringify(passports)}
            {
                passports.map(passport =>
                    <li className="list-group-item"
                        key={passport.pId}>
                        <Link to={`/passports/${passport.pId}`}>
                            Passport Number: {passport.passportNumber}
                        </Link>
                    </li>
                )
            }
        </ul>
    )}
export default PassportListScreen;
