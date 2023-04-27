/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [getError1, setError1] = useState("");
    const [getError2, setError2] = useState("");
    const [getError3, setError3] = useState("");
    const [getError4, setError4] = useState("");
    const [getError5, setError5] = useState("");

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        if (!value) {
            setError1("Please enter your first name");
        } else if (value.length < 2) {
            setError1("Your first name must be at least 2 characters long");
        } else {
            setError1("");
        }
        setFirstName(value);
    };

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        if (!value) {
            setError2("Please enter your last name");
        } else if (value.length < 2) {
            setError2("Your last name must be at least 2 characters long");
        } else {
            setError2("");
        }
        setLastName(value);
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        if (!value) {
            setError3("Please enter your email");
        } else if (value.length < 5) {
            setError3("Your email must be at least 5 characters long");
        } else {
            setError3("");
        }
        setEmail(value);    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        if (!value) {
            setError4("Please enter your password");
        } else if (value.length < 8) {
            setError4("Your password must be at least 8 characters long");
        } else {
            setError4("");
        }
        setPassword(value);    };

    const handleConfirmPasswordChange = (event) => {
        const value = event.target.value;
        if (!value) {
            setError5("Please confirm your password");
        } else if (value !== password) {
            setError5("Passwords do not match");
        } else {
            setError5("");
        }
        setConfirmPassword(value);
    };

    return (
        <div className="general">
            <div className="first">
                <form>
                    <div>
                        <label>
                            First Name:
                            <input
                                type="text"
                                value={firstName}
                                onChange={handleFirstNameChange}
                            />
                        </label>
                        {getError1 && <div>{getError1}</div>}
                    </div>

                    <div>
                        <label>Last Name: 
                        <input
                            type="text"
                            value={lastName}
                            onChange={handleLastNameChange}
                        />{getError2 && <div>{getError2}</div>}</label>
                    </div>
                    <div>
                        <label>Email Address: 
                        <input type="email" value={email} onChange={handleEmailChange} />{getError3 && <div>{getError3}</div>}</label>
                    </div>
                    <div>
                        <label>Password:
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />{getError4 && <div>{getError4}</div>} </label>
                    </div>
                    <div>
                        <label>Confirm Password: 
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />{getError5 && <div>{getError5}</div>}</label>
                    </div>
                </form>
                {/* <div>
            <h2>Form Data:</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email Address: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>*/}
            </div>
        </div>
    );
};

export default UserForm;
