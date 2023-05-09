import React from "react";
import { useParams } from "react-router-dom";

function Num() {
    const { input } = useParams();
    return (
        <>
        {
            isNaN(input)? <h1>{input}</h1>:
        <h1>Your number is: {input}!</h1>
    }</>
    );
}

export default Num;