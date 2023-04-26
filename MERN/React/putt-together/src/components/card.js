import React , {useState}from "react";

const UserCard=(props)=>{

    const [Age, setAge]=useState(props.age);
    console.log(Age)
    return (
        <>
            <h1>{props.lastName},{props.firstName}</h1>
            <p>Age : {Age}</p>
            <p>Haircolor : {props.haircolor}</p>
            <button onClick={(e)=> setAge(Age+1)}>Birthday Button for {props.firstName}{props.lastName}</button>
        </>
    )
}

export default UserCard;