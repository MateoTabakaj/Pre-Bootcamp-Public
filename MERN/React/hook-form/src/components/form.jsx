import React, { useState } from "react";
import './form.css';

const UserForm = (props) => {
const [firstName, setfirstName] = useState("");
const [lastName, setlastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [comfirm, setcomfirm] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, comfirm };
    console.log("Welcome", newUser);
    setfirstName("");
    setlastName("");
    setEmail("");
    setPassword("");
    setcomfirm("");
};

const handleDisplay = (e) => {
    e.preventDefault();
    const display = document.querySelector(".display");
    const newUser = { firstName, lastName, email, password, comfirm };
    display.innerHTML = `
    <p>First Name: ${newUser.firstName}</p>
    <p>Last Name: ${newUser.lastName}</p>
    <p>Email: ${newUser.email}</p>
    <p>Password: ${newUser.password}</p>
    <p>Confirm Password: ${newUser.comfirm}</p>
    `;
};

return (
    <div className="general">
    <div className="second">
    <form onSubmit={handleSubmit}>
        <div>
        <label>First Name: </label>
        <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
        />
        </div>
        <div>
        <label>Last Name: </label>
        <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
        />
        </div>
        <div>
        <label>Email Address: </label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <label>Password: </label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div>
        <label>Confirm password: </label>
        <input
            type="password"
            id="comfirm"
            value={comfirm}
            onChange={(e) => setcomfirm(e.target.value)}
        />
        </div>
        <button type="submit" onClick={handleDisplay}>
        Create User
        </button>
    </form>
    <div className="display"></div>
    </div>
    </div>
);
};

const User = (props) => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
};

const handleLastNameChange = (event) => {
    setLastName(event.target.value);
};

const handleEmailChange = (event) => {
    setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};

const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
};

return (
    <div className="general">
    <div className="first">
    <form>
        <div>
        <label>First Name: </label>
        <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
        />
        </div>
        <div>
        <label>Last Name: </label>
        <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
        />
        </div>
        <div>
        <label>Email Address: </label>
        <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
        <label>Password: </label>
        <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
        />
        </div>
        <div>
        <label>Confirm Password: </label>
        <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
        />
        </div>
    </form>
    <div>
        <h2>Form Data:</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email Address: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
    </div>
    </div>
    </div>
);
};

export { User};

export default UserForm;
